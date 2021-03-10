class BillboardsController < ApplicationController
  before_action :set_billboard, only: [:show, :update, :edit, :destroy]
  def index
    @billboards = Billboard.available
    render component: "Billboards", props: {billboards: @billboards}
  end

  def show
    @billboard = Billboard.find(params[:id])
    render component: "Billboard",props:{
    billboard: @billboard}
  end

  def new
    @billboard = Billboard.new # don't need to do this with react rendering
    render component: "BillboardNew", props: { billboard: @billboard }
  end

  def edit
    render component: "BillboardEdit", props: {billboard: @billboard}
  end
  def create
    @billboard = Billboard.new(billboard_params)
    if @billboard.save
      redirect_to billboards_path
    else
      render component: "BillboardNew", props: { billboard: @billboard}
    end
  end
    def update
      if @billboard.update(billboard_params)
        redirect_to @billboard
      else
        render component: "BillboardEdit", props: {billboard: @billboard}
      end
    end
    def destroy
      @billboard.destroy
      redirect_to billboards_path
    end

    private

    def set_billboard
      @billboard=Billboard.find(params[:id])
    end

    def billboard_params
      params.require(:billboard).permit(:title)
end
