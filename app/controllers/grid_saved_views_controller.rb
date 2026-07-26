class GridSavedViewsController < ApplicationController
  before_action :set_grid
  before_action :set_saved_view, only: %i[update destroy]

  def create
    saved_view = Current.user.grid_saved_views.new(saved_view_params.merge(grid_key: @definition.key))
    if saved_view.save
      redirect_to grid_path(@definition.key, view_id: saved_view.id), notice: t("grid_engine.saved_views.created")
    else
      redirect_to grid_path(@definition.key), alert: saved_view.errors.full_messages.to_sentence
    end
  end

  def update
    if @saved_view.update(saved_view_params)
      redirect_to grid_path(@definition.key, view_id: @saved_view.id), notice: t("grid_engine.saved_views.updated")
    else
      redirect_to grid_path(@definition.key), alert: @saved_view.errors.full_messages.to_sentence
    end
  end

  def destroy
    @saved_view.destroy!
    redirect_to grid_path(@definition.key), notice: t("grid_engine.saved_views.destroyed")
  end

  private

  def set_grid
    @definition = GridEngine::Catalog.fetch(params[:grid_id])
  rescue KeyError
    head :not_found
  end

  def set_saved_view
    @saved_view = Current.user.grid_saved_views.for_grid(@definition.key).find(params[:id])
  end

  def saved_view_params
    raw = params.require(:grid_saved_view).permit(:name, :default, query: {}, preferences: {})
    raw[:query] = normalize_object(raw[:query])
    raw[:preferences] = normalize_object(raw[:preferences])
    raw
  end

  def normalize_object(value)
    value.respond_to?(:to_h) ? value.to_h : {}
  end
end
