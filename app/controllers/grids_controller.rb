class GridsController < ApplicationController
  def show
    @definition = GridEngine::Catalog.fetch(params[:id])
    @saved_views = Current.user.grid_saved_views.for_grid(@definition.key)
    requested_query = permitted_query.to_h
    @selected_view = @saved_views.find_by(id: params[:view_id])
    @selected_view ||= @saved_views.find_by(default: true) if params[:view_id].blank? && requested_query.empty?
    @query_params = @selected_view&.query.presence || requested_query
    @preferences = @selected_view&.preferences.presence || {}
    @ast = GridEngine::Query::Parser.new(@definition).parse(@query_params)
    @result = GridEngine::ActiveRecordAdapter.new(@definition).call(@ast, scope: grid_scope)

    respond_to do |format|
      format.html
      format.json { render json: GridEngine::TabulatorAdapter.new(@definition).response(@result) }
      format.csv do
        relation = GridEngine::ActiveRecordAdapter.new(@definition).call(export_ast, scope: grid_scope).records
        send_data GridEngine::CsvExporter.new(@definition).call(relation, columns: selected_columns),
          filename: "#{@definition.key}-#{Date.current.iso8601}.csv",
          type: "text/csv"
      end
    end
  rescue KeyError, GridEngine::Query::ValidationError
    head :unprocessable_content
  end

  private

  def permitted_query
    params.permit(:page, :per_page, filters: %i[column operator value], sorts: %i[column direction])
  end

  def selected_columns
    params[:columns] || @preferences["columns"]
  end

  def export_ast
    GridEngine::Query::Ast.new(filters: @ast.filters, sorts: @ast.sorts, page: 1, per_page: GridEngine::CsvExporter::MAX_ROWS)
  end

  def grid_scope
    case @definition.key
    when "organizations"
      Current.user.organizations.distinct
    else
      raise KeyError, "Unscoped grid"
    end
  end
end
