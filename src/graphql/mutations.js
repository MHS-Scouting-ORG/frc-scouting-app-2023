/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      description
      Comment
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      description
      Comment
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      description
      Comment
      createdAt
      updatedAt
    }
  }
`;
export const createTeamMatch = /* GraphQL */ `
  mutation CreateTeamMatch(
    $input: CreateTeamMatchInput!
    $condition: ModelTeamMatchConditionInput
  ) {
    createTeamMatch(input: $input, condition: $condition) {
      id
      name
      description
      Team
      Regional
      Autonomous {
        AutonomousPlacement
        Scored {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        Attempted {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        LeftCommunity
        ChargeStation
      }
      Teleop {
        Scored {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        Attempted {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        Accuracy {
          High
          Mid
          Low
          Overall
        }
        ChargeStation
        EndGame
        EndGameTally {
          Start
          End
        }
        ScoringTotal {
          Total
          GridPoints
          GridScoringByPlacement {
            High
            Mid
            Low
          }
          Cones
          Cubes
        }
        DriveStrength
        DriveSpeed
        ConesAccuracy {
          High
          Mid
          Low
          Overall
        }
        CubesAccuracy {
          High
          Mid
          Low
          Overall
        }
        SmartPlacement
      }
      Comments
      Penalties {
        Fouls
        Tech
        Penalties
      }
      Priorities
      RankingPts
      createdAt
      updatedAt
    }
  }
`;
export const updateTeamMatch = /* GraphQL */ `
  mutation UpdateTeamMatch(
    $input: UpdateTeamMatchInput!
    $condition: ModelTeamMatchConditionInput
  ) {
    updateTeamMatch(input: $input, condition: $condition) {
      id
      name
      description
      Team
      Regional
      Autonomous {
        AutonomousPlacement
        Scored {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        Attempted {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        LeftCommunity
        ChargeStation
      }
      Teleop {
        Scored {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        Attempted {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        Accuracy {
          High
          Mid
          Low
          Overall
        }
        ChargeStation
        EndGame
        EndGameTally {
          Start
          End
        }
        ScoringTotal {
          Total
          GridPoints
          GridScoringByPlacement {
            High
            Mid
            Low
          }
          Cones
          Cubes
        }
        DriveStrength
        DriveSpeed
        ConesAccuracy {
          High
          Mid
          Low
          Overall
        }
        CubesAccuracy {
          High
          Mid
          Low
          Overall
        }
        SmartPlacement
      }
      Comments
      Penalties {
        Fouls
        Tech
        Penalties
      }
      Priorities
      RankingPts
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeamMatch = /* GraphQL */ `
  mutation DeleteTeamMatch(
    $input: DeleteTeamMatchInput!
    $condition: ModelTeamMatchConditionInput
  ) {
    deleteTeamMatch(input: $input, condition: $condition) {
      id
      name
      description
      Team
      Regional
      Autonomous {
        AutonomousPlacement
        Scored {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        Attempted {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        LeftCommunity
        ChargeStation
      }
      Teleop {
        Scored {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        Attempted {
          Cones {
            Upper
            Mid
            Lower
          }
          Cubes {
            Upper
            Mid
            Lower
          }
        }
        Accuracy {
          High
          Mid
          Low
          Overall
        }
        ChargeStation
        EndGame
        EndGameTally {
          Start
          End
        }
        ScoringTotal {
          Total
          GridPoints
          GridScoringByPlacement {
            High
            Mid
            Low
          }
          Cones
          Cubes
        }
        DriveStrength
        DriveSpeed
        ConesAccuracy {
          High
          Mid
          Low
          Overall
        }
        CubesAccuracy {
          High
          Mid
          Low
          Overall
        }
        SmartPlacement
      }
      Comments
      Penalties {
        Fouls
        Tech
        Penalties
      }
      Priorities
      RankingPts
      createdAt
      updatedAt
    }
  }
`;
