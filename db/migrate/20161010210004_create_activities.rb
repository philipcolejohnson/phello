class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.string :text
      t.references :card, foreign_key: true

      t.timestamps
    end
  end
end
