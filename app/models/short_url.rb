class ShortUrl < ApplicationRecord
    validates :originalURL, presence: true
    validates :shortName, uniqueness: true
    before_create :generate_shortName
    def generate_shortName
        if (self.shortName.nil? ||  self.shortName.empty?)
            chars = ['0'..'9','A'..'Z','a'..'z'].map{|range| range.to_a}.flatten
            self.shortName = 6.times.map{chars.sample}.join
            self.shortName = 6.times.map{chars.sample}.join until ShortUrl.find_by_shortName(self.shortName).nil?
        end    
      end    
end