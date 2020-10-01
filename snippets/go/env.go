package utils

import (
	"errors"
	"fmt"
	"os"
)

func noEnv(key string) string {
	return fmt.Sprintf("could not find environment variable \"%s\"", key)
}

func GetEnv(key string) (value string, err error) {
	value, exists := os.LookupEnv(key)

	if !exists {
		err = errors.New(noEnv(key))
	}

	return
}

func GetEnvOrDefault(key, defaultValue string) (value string) {
	value, err := GetEnv(key)

	if err != nil {
		value = defaultValue
	}

	return
}
