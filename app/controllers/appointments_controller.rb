class AppointmentsController < ApplicationController
  def new
    @appointment = Appointment.new
  end

  def create
    @appointment = Appointment.new(params[:appointment])
    @appointment.request = request
    if @appointment.deliver
      flash.now[:error] = nil
    else
      flash.now[:error] = "Could not send message"
      render :new
    end
  end
end
