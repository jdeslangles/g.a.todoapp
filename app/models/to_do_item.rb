class ToDoItem < ActiveRecord::Base
  attr_accessible :name, :position, :to_do_list_id
  belongs_to :to_do_list
  acts_as_list scope: :to_do_list
end
