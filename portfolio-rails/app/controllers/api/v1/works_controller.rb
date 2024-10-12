module Api
  module V1
    class WorksController < ActionController::Base
      def index
        file_data = []
        File.open("./storage/data.json") do |f|
          file_data = JSON.load(f)
        end

        return_value = {
          value: file_data["works"]
        }
        render json: return_value, status: :ok
      end
    end
  end
end

