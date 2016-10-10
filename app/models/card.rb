class Card < ApplicationRecord
  belongs_to :list

  has_many :assignments
  has_many :workers, through: :assignments, source: :user
end
