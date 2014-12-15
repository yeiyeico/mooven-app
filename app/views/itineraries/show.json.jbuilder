
json.id @itinerary.id
json.itinerary_name @itinerary.itinerary_name
json.avaliable_seats @itinerary.avaliable_seats


json.start_point do
  json.id @itinerary.start_point.id
  json.address @itinerary.start_point.address
  json.name @itinerary.start_point.name
  json.longitude @itinerary.start_point.longitude
  json.latitude @itinerary.start_point.latitude
end

json.end_point do
  json.id @itinerary.end_point.id
  json.address @itinerary.end_point.address
  json.name @itinerary.end_point.name
  json.longitude @itinerary.end_point.longitude
  json.latitude @itinerary.end_point.latitude
end