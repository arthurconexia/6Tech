package utils

import "github.com/google/uuid"

func IsValidId (id string) bool {
	parsed, err := uuid.Parse(id)

	if err != nil || IsEmptyId(parsed) {
		return false
	}

	return true
}
