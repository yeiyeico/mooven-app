json.array!(@itineraries) do |itinerary|
  json.extract! itinerary, :itinerary_name, :avaliable_seats, :start_point, :end_point
  json.url itinerary_url(itinerary, format: :json)
end
