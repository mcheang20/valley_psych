class Contact < MailForm::Base
  attribute :firstName,     :validate => true
  attribute :lastName,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :phone
  attribute :subject
  attribute :nickname,  :captcha  => true

  def headers
    {
      :subject => "Contact Form",
      :to => "cheangmatt@gmail.com",
      :from => %("#{firstName}" "#{lastName}" "<#{email}>)
    }
  end
end
