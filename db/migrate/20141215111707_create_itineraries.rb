class CreateItineraries < ActiveRecord::Migration
  def change

    create_table :itineraries do |t|
      t.string  :itinerary_name
      t.integer :avaliable_seats
      t.belongs_to :start_point, class_name: "Point"
      t.belongs_to :end_point, class_name: "Point"
      t.timestamps
    end
  end
end
