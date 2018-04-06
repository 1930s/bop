# == Schema Information
#
# Table name: albums
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  year            :integer          not null
#  artist_id       :integer          not null
#  album_type      :string           default("Album")
#  album_cover_url :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Album < ApplicationRecord

    validates :title, :year, :artist_id, :artist_type, :album_cover_url, null: false

    belongs_to :artist
    has_many :songs

end
