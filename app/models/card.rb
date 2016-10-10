class Card < ApplicationRecord
  belongs_to :list

  has_many :activities, dependent: :destroy

  has_many :assignments, dependent: :destroy
  has_many :workers, through: :assignments, source: :user
end
