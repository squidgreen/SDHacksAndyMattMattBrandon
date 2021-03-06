class UsersController < ApplicationController
    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = @user.id
            redirect_to '/center'
        else
            redirect_to '/users/new'
        end
    end

    def confirm
        @user = User.last
    end

    def show
        @user = User.find(params[:id])
    end

    def edit
        @user = User.find(params[:id])
    end

    private
    def user_params
        params.require(:user)
        .permit(:first_name, :last_name, :email, :password)
    end
end
