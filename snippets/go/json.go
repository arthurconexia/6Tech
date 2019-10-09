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
