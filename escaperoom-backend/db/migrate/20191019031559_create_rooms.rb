class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.integer :game_id
      t.integer :start_time
      t.integer :end_time

      t.timestamps
    end
  end
end
