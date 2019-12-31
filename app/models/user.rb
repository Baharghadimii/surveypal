class User < ApplicationRecord
  belongs_to :user_types
  has_many :teams
  has_many :surveys
  has_many :survey_question_answers
end
