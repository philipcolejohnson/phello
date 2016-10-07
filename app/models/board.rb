class Board < ApplicationRecord
  has_one :user
  has_many :lists, dependent: :destroy
end
