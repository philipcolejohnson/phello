class AddUserReferencesToActivities < ActiveRecord::Migration[5.0]
  def change
    add_reference :activities, :user
  end
end
