class ToDoItem < ActiveRecord::Base
  attr_accessible :name, :position, :to_do_list_id
  belongs_to :to_do_list

  default_scope order (:position)
  acts_as_list
end
