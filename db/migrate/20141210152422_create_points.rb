class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.string :address
      t.string :name
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
