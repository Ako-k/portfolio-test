module Api
  module V1
    class SkillsController < ActionController::Base
      def index
        file_data = []
        File.open("./storage/data.json") do |f|
          file_data = JSON.load(f)
        end

        return_value = {
          value: file_data["skills"]
        }
        render json: return_value, status: :ok
      end

      def hello
        return_value = {
          value: "よおこそ"
        }
    
        render json: return_value, status: :ok
      end
    end
  end
end

