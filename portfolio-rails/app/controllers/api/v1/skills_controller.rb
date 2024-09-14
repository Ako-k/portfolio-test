module Api
  module V1
    class SkillsController < ActionController::Base
      def index
        return_value = {
          value: "よおこそ"
        }
    
        render json: return_value, status: :ok
      end
    end
  end
end

