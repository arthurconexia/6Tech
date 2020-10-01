package utils

import (
	"github.com/google/uuid"
	"strings"
)

func IsEmptyString (str string) bool {
	return strings.TrimSpace(str) == ""
}

func IsEmptyId (id uuid.UUID) bool {
	return id == uuid.Nil
}
