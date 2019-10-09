package utils

import (
	"encoding/json"
)

type Map map[string]interface{}

func RawJSONtoMap(raw []byte) (Map, error) {
	prop := make(Map)
	err := json.Unmarshal(raw, &prop)
	if err != nil {
		return nil, err
	}
	return prop, nil
}

func EnsurePropertiesInMap(m Map, properties ...string) (bool, string) {
	for _, property := range properties {
		_, ok := m[property]
		if !ok {
			return false, property
		}
	}
	return true, ""
}