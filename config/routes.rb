ToDoApp::Application.routes.draw do
  devise_for :users

  resources :to_do_items do
    member do
      # put 'move/:direction', to: 'todo_items#move_in_list', as: :move_in_list
      post '/change_position', to: 'to_do_items#change_position'
    end
  end

  resources :to_do_lists

  root to: 'to_do_lists#index'
end
