class SongsController < ApplicationController
  before_action :set_artist
  def index
    @song = @artist.songs
    render component: "Songs", props: { artist: @artist, songs: @songs }
  end

  def show 
    @song = @artist.song
    render component: "Song", props: {artist: @artist, song: @song}
  end

  def new
    @song = Song.new
    render component: "SongNew", props: { artist: @artist, song: @songt }
  end

  def create
    @song = @artist.songs.new(song_params)
    if @song.save
      redirect_to billboard_artist_path(@artist.billboard_id, @artist)
    else
      render :new
      render component: "SongNew", props: { artist: @artist, song: @song }
    end
  end
  private
    def set_artist
      @artist = Artist.find(params[:artist_id])
    end

    def comment_params
      params.require(:song).permit(:name)
    end
end