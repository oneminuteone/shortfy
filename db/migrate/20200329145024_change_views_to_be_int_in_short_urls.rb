class ChangeViewsToBeIntInShortUrls < ActiveRecord::Migration[6.0]
  def change
    change_column :short_urls, :views, :integer
  end
end
