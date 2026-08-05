class Ej2ShowcaseController < ApplicationController
  def show
    @active_section = params[:section] || "forms"
  end
end
