class CreateShortUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :short_urls do |t|
      t.text :originalURL, null: false
      t.string :shortName, null: false
      t.numeric :views, default: 0   

      t.timestamps
    end
  end
end
