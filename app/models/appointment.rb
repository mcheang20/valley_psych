class Appointment < MailForm::Base
  attribute :name,     :validate => true
  attribute :email,    :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :phone
  attribute :subject
  attribute :gender
  attribute :date
  attribute :nickname,  :captcha  => true

  def headers
    {
      :subject => "New Appointment Request",
      :to => "cheangmatt@gmail.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
