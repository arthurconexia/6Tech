(ns snippets.clojure.macros-util)

(defmacro kerr->
  "When expr is not nil and not is a map with an error key,
  threads it into the first form (via ->), and when that
  result is not nil, through the next etc"
  [expr & forms]
  (let [g (gensym)
        func (fn [step]
               `(cond
                  (nil? ~g) nil
                  (and (map? ~g) (contains? ~g :error)) (select-keys ~g [:error])
                  :else (-> ~g ~step)))
        steps (map func forms)
        finalexpr `(let [~g ~expr
                         ~@(interleave (repeat g) (butlast steps))]
                     ~(if (empty? steps)
                        g
                        (last steps)))]
    finalexpr))
