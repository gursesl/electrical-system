const typeDefinitions = `

enum MainCurrentRating {
	100
	150
	200
	400
}

enum BreakerCurentRating {
	15
	20
	25
	30
	35
	40
	50
	60
	70
	90
	100
}

const LoadType {
	FIXTURE
	OUTLET
}

type User {
  _id: String! # Indicadive of MongoDB , use id if you'd like to use SQL
	createdAt: String
  firstName: String
  lastName: String
  username: String!
  building: [Building] # User has many Buildings
}

type Building {
	_id: String!
	createdAt: String
	name: String!
	address1: String
	address2: String
	city: String
	state: String
	panels: [Panel] # Building has many Panels, even though there's probably only one.
	rooms: [Room] # Building has many Rooms
}

type Panel {
	_id: String!
	createdAt: String
	name: String!
	rating: Int!
	slots: Int!
	image: Image # Panel has one Image
	breakers: [Breaker] # Panel has many Breakers
}

type Room {
	_id: String!
	createdAt: String
	label: String!
}

type Image {
	_id: String!
	createdAt: String
	url: String!
}

type Breaker {
	_id: String!
	createdAt: String
	label: String!
	description: String
	rating: Int!
	loads: [Load] # Breaker has many Loads , IE lights and outlets
}

type Load {
	_id: String!
	createdAt: String
	label: String!
	type: String!
	image: Image # Load has one Image
	switches: [Toggle] # Load may have many Toggles , single or 2 way
}

type Toggle { # Can't call this switch
	_id: String!
	createdAt: String
	label: String!
	image: Image # Toggle has one Image
}

# types for mutations
type AuthPayload {
  token: String # JSON Web Token
  data: User
}



# the schema allows the following queries:
type RootQuery {
	// viewer: User
	// buildings: [Building]
	// building(_id: String!): Building
	// rooms(buildingId: String!): [Room]
	// room(_id: String!): Room
	// panels(buildingId: String!): [Panel]
	// panel(_id: String!): Panel
	// breakers(panelId: String!): [Breaker]
	// roomLoads(roomId: String!): [Load]
	// breakerLoads(breakerId: String!): [Load]
	// toggle(_id: String!): Toggle
}

# this schema allows the following mutations:
type RootMutation {
	// signUp (
	// 	username: String!
  //   password: String!
  //   firstName: String
  //   lastName: String
	// ): User

	// logIn (
	// 	username: String!
	// 	password: String!
	// ): AuthPayload

	// createBuilding (
	// 	name: String!
	// 	address1: String
	// 	address2: String
	// 	city: String
	// 	state: String
	// ): Building

	// updateBuilding (
	// 	_id: String!
	// 	name: String!
	// 	address1: String
	// 	address2: String
	// 	city: String
	// 	state: String
	// ): Building

	// deleteBuilding (
	// 	_id: String!
	// }

	// createRoom (
	// 	label: String!
	// ): Room

	// updateRoom (
	// 	_id: String!
	// 	label: String!
	// ): Room

	// deleteRoom (
	// 	_id: String!
	// ): Room

	// createPanel (
	// 	buildingId: String!
	// 	name: String!
	// 	rating: Int!
	// 	slots: Int!
	// ): Panel

	// updatePanel (
	// 	_id: String!
	// 	buildingId: String!
	// 	name: String!
	// 	rating: Int!
	// 	slots: Int!
	// ): Panel

	// deletePanel (
	// 	_id: String!
	// ): Panel

	# more todo, but lets seed and see if the whole thing hasn't blown up

}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
	query: RootQuery
	mutation: RootMutation
}
`;
