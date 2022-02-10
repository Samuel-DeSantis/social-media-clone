class Message < ApplicationRecord
    belongs_to :user

    def self.getMessages
        self.all.map do |message| {
                id: message.id,
                user: message.user.name,
                content: message.content,
                last_update: message.updated_at
            }
        end
    end
end
