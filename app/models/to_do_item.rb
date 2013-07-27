class ToDoItem < ActiveRecord::Base
  attr_accessible :name, :position
  belongs_to :to_do_list
  acts_as_list scope: :to_do_list
end
