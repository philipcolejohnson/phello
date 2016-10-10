class AddImageToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :image_path, :string
  end
end
