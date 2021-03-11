
class ArtistsController < ApplicationController
    before_action :set_billboard
    before_action :set_artist, only: [:show, :edit, :update, :destroy]

    def index
        @artists = @billboard.artists
        render component: "Artists", props: { billboard: @billboard, artists: @artists}
    end

    def show
        render component: "Artist", props: { billboard: @billboard, artist: @artist }
    end

    def new
        @artist = @billboard.artists.new
        render component: "ArtistNew", props: {billboard: @billboard, artist: @artist}
    end

    def edit
        render component: "ArtistsEdit", props: {billboard: @billboard, artist: @artist}
    end

    def create
        @artist = @billboard.artist.new(topic_params)
        if @artist.save
            redirect_to [@billboard, @artist]
        else
            render :edit
        end

    end
    
    def destroy
        @artist.destroy
        redirect_to billboard_artist_path(@billboard)
    end

    private
    def set_billboard
        @billboard = Billboard.find(params[:billboard_id])
    end

    def set_artist
        @artist = Artist.find(params[:id])
    end
    def artist_params
        params.require(:artist).permit(:name)
    end

end