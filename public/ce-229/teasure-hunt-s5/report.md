<style>
.ant-tabs-tabpane-active p {
  text-align: justify;
}

.ant-tabs-tabpane-active table, th, td {
  border: 1px dotted black;
}

.ant-tabs-tabpane-active pre {
  background-color: #EEEEEE;
  margin: 20px;
  padding: 10px;
  border: 2px dotted black;
  width: 80%;
}
</style>

# Caça ao Tesouro 2 - TDD

Time: TS02 - Médicos - 2020-04-09
- Alexandre Pimentel
- Vinicius Lippi
- Andre Baccarin
- Lucas Barioni

---
```python
import unittest
```
---

```python
class RickTests(unittest.TestCase):
  def test_universe(self):
    rick = Rick(111)
    self.assertEqual(rick.universe, 111)
    
unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    E
    ======================================================================
    ERROR: test_universe (__main__.RickTests)
    ----------------------------------------------------------------------
    Traceback (most recent call last):
      File "<ipython-input-2-ec31bc965dc6>", line 3, in test_universe
        rick = Rick(111)
    NameError: name 'Rick' is not defined
    
    ----------------------------------------------------------------------
    Ran 1 test in 0.001s
    
    FAILED (errors=1)





    <unittest.main.TestProgram at 0x7f784065fa58>

---


```python
class Rick(object):
    def __init__(self, universe):
        self.universe = universe

```


```python
class RickTests(unittest.TestCase):
  def test_universe(self):
    rick = Rick(111)
    self.assertEqual(rick.universe, 111)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    .
    ----------------------------------------------------------------------
    Ran 1 test in 0.000s
    
    OK





    <unittest.main.TestProgram at 0x7f784066dfd0>


---

```python
class MortyTests(unittest.TestCase):
    def test_universe(self):
        morty = Morty(111)
        self.assertEqual(morty.universe, 111)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    E.
    ======================================================================
    ERROR: test_universe (__main__.MortyTests)
    ----------------------------------------------------------------------
    Traceback (most recent call last):
      File "<ipython-input-5-b5cd8423aef4>", line 3, in test_universe
        morty = Morty(111)
    NameError: name 'Morty' is not defined
    
    ----------------------------------------------------------------------
    Ran 2 tests in 0.001s
    
    FAILED (errors=1)





    <unittest.main.TestProgram at 0x7f784060a4a8>


---

```python
class Morty(object):
    def __init__(self, universe):
        self.universe = universe
```


```python
class MortyTests(unittest.TestCase):
    def test_universe(self):
        morty = Morty(111)
        self.assertEqual(morty.universe, 111)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    ..
    ----------------------------------------------------------------------
    Ran 2 tests in 0.001s
    
    OK





    <unittest.main.TestProgram at 0x7f784061f588>


---

```python
class CitadelTests(unittest.TestCase):
    def test_get_all_residents(self):
        citadel = Citadel()
        residents = citadel.get_all_residents()
        self.assertCountEqual(residents, [])

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    E..
    ======================================================================
    ERROR: test_get_all_residents (__main__.CitadelTests)
    ----------------------------------------------------------------------
    Traceback (most recent call last):
      File "<ipython-input-8-5ddbed3ef59b>", line 3, in test_get_all_residents
        citadel = Citadel()
    NameError: name 'Citadel' is not defined
    
    ----------------------------------------------------------------------
    Ran 3 tests in 0.001s
    
    FAILED (errors=1)





    <unittest.main.TestProgram at 0x7f784066d5c0>

---


```python
class Citadel(object):
    def __init__(self):
        self.__residents__ = []
        
    def get_all_residents(self):
        pass
```


```python
class CitadelTests(unittest.TestCase):
    def test_get_all_residents(self):
        citadel = Citadel()
        residents = citadel.get_all_residents()
        self.assertCountEqual(residents, [])

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    E..
    ======================================================================
    ERROR: test_get_all_residents (__main__.CitadelTests)
    ----------------------------------------------------------------------
    Traceback (most recent call last):
      File "<ipython-input-10-5ddbed3ef59b>", line 5, in test_get_all_residents
        self.assertCountEqual(residents, [])
      File "/usr/lib/python3.7/unittest/case.py", line 1182, in assertCountEqual
        first_seq, second_seq = list(first), list(second)
    TypeError: 'NoneType' object is not iterable
    
    ----------------------------------------------------------------------
    Ran 3 tests in 0.003s
    
    FAILED (errors=1)





    <unittest.main.TestProgram at 0x7f784061f7f0>


---

```python
class Citadel(object):
    def __init__(self):
        self.__residents__ = []
        
    def get_all_residents(self):
        return self.__residents__
```


```python
class CitadelTests(unittest.TestCase):
    def test_get_all_residents(self):
        citadel = Citadel()
        residents = citadel.get_all_residents()
        self.assertCountEqual(residents, [])

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    ...
    ----------------------------------------------------------------------
    Ran 3 tests in 0.001s
    
    OK





    <unittest.main.TestProgram at 0x7f7840627d68>


---

```python
class CitadelTests(unittest.TestCase):
    def test_get_all_residents(self):
        citadel = Citadel()
        residents = citadel.get_all_residents()
        self.assertCountEqual(residents, [])
        
    def test_add_resident(self):
        citadel = Citadel()
        rick = Rick(111)
        morty = Morty(111)
        
        citadel.add_resident(rick)
        citadel.add_resident(morty)
        residents = citadel.get_all_residents()
        
        self.assertEqual(residents[0], rick)
        self.assertEqual(residents[1], morty)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    E...
    ======================================================================
    ERROR: test_add_resident (__main__.CitadelTests)
    ----------------------------------------------------------------------
    Traceback (most recent call last):
      File "<ipython-input-13-d1dd4dbd6656>", line 12, in test_add_resident
        citadel.add_resident(rick)
    AttributeError: 'Citadel' object has no attribute 'add_resident'
    
    ----------------------------------------------------------------------
    Ran 4 tests in 0.002s
    
    FAILED (errors=1)





    <unittest.main.TestProgram at 0x7f784065f9e8>


---

```python
class Citadel(object):
    def __init__(self):
        self.__residents__ = []
        
    def get_all_residents(self):
        return self.__residents__
    
    def add_resident(self, resident):
        self.__residents__.append(resident)
```


```python
class CitadelTests(unittest.TestCase):
    def test_get_all_residents(self):
        citadel = Citadel()
        residents = citadel.get_all_residents()
        self.assertCountEqual(residents, [])
        
    def test_add_resident(self):
        citadel = Citadel()
        rick = Rick(111)
        morty = Morty(111)
        
        citadel.add_resident(rick)
        citadel.add_resident(morty)
        residents = citadel.get_all_residents()
        
        self.assertEqual(residents[0], rick)
        self.assertEqual(residents[1], morty)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    ....
    ----------------------------------------------------------------------
    Ran 4 tests in 0.003s
    
    OK





    <unittest.main.TestProgram at 0x7f784061d898>


---

```python
class MortyTests(unittest.TestCase):
    def test_universe(self):
        morty = Morty(111)
        self.assertEqual(morty.universe, 111)
    
    def test_is_assigned(self):
        morty = Morty(111)
        self.assertFalse(morty.is_assigned)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    ..E..
    ======================================================================
    ERROR: test_is_assigned (__main__.MortyTests)
    ----------------------------------------------------------------------
    Traceback (most recent call last):
      File "<ipython-input-16-c95714c0722e>", line 8, in test_is_assigned
        self.assertFalse(morty.is_assigned)
    AttributeError: 'Morty' object has no attribute 'is_assigned'
    
    ----------------------------------------------------------------------
    Ran 5 tests in 0.002s
    
    FAILED (errors=1)





    <unittest.main.TestProgram at 0x7f784061d748>

---


```python
class Morty(object):
    def __init__(self, universe):
        self.universe = universe
        self.is_assigned = False
```


```python
class MortyTests(unittest.TestCase):
    def test_universe(self):
        morty = Morty(111)
        self.assertEqual(morty.universe, 111)
    
    def test_is_assigned(self):
        morty = Morty(111)
        self.assertFalse(morty.is_assigned)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    .....
    ----------------------------------------------------------------------
    Ran 5 tests in 0.002s
    
    OK





    <unittest.main.TestProgram at 0x7f78405e16a0>

---


```python
class RickTests(unittest.TestCase):
    def test_universe(self):
        rick = Rick(111)
        self.assertEqual(rick.universe, 111)
        
    def test_has_morty(self):
        rick = Rick(111)
        self.assertEqual(rick.morty, None)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    ....E.
    ======================================================================
    ERROR: test_has_morty (__main__.RickTests)
    ----------------------------------------------------------------------
    Traceback (most recent call last):
      File "<ipython-input-19-48018e9cd536>", line 8, in test_has_morty
        self.assertEqual(rick.morty, None)
    AttributeError: 'Rick' object has no attribute 'morty'
    
    ----------------------------------------------------------------------
    Ran 6 tests in 0.005s
    
    FAILED (errors=1)





    <unittest.main.TestProgram at 0x7f78405cfb00>


---

```python
class Rick(object):
    def __init__(self, universe):
        self.universe = universe
        self.morty = None
```


```python
class RickTests(unittest.TestCase):
    def test_universe(self):
        rick = Rick(111)
        self.assertEqual(rick.universe, 111)
        
    def test_has_morty(self):
        rick = Rick(111)
        self.assertEqual(rick.morty, None)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    ......
    ----------------------------------------------------------------------
    Ran 6 tests in 0.003s
    
    OK





    <unittest.main.TestProgram at 0x7f78405cf4a8>


---

```python
class RickTests(unittest.TestCase):
    def test_universe(self):
        rick = Rick(111)
        self.assertEqual(rick.universe, 111)
        
    def test_has_morty(self):
        rick = Rick(111)
        self.assertEqual(rick.morty, None)
        
    def test_assing_morty(self):
        rick = Rick(111)
        morty = Morty(111)
        
        rick.assign(morty)
        
        self.assertEqual(rick.morty, morty)
        self.assertTrue(morty.is_assigned)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    ....E..
    ======================================================================
    ERROR: test_assing_morty (__main__.RickTests)
    ----------------------------------------------------------------------
    Traceback (most recent call last):
      File "<ipython-input-22-ddf03ab9ba54>", line 14, in test_assing_morty
        rick.assign(morty)
    AttributeError: 'Rick' object has no attribute 'assign'
    
    ----------------------------------------------------------------------
    Ran 7 tests in 0.005s
    
    FAILED (errors=1)





    <unittest.main.TestProgram at 0x7f78405ef978>

---


```python
class Rick(object):
    def __init__(self, universe):
        self.universe = universe
        self.morty = None
        
    def assign(self, morty):
        self.morty = morty
        morty.is_assigned = True
```


```python
class RickTests(unittest.TestCase):
    def test_universe(self):
        rick = Rick(111)
        self.assertEqual(rick.universe, 111)
        
    def test_has_morty(self):
        rick = Rick(111)
        self.assertEqual(rick.morty, None)
        
    def test_assing_morty(self):
        rick = Rick(111)
        morty = Morty(111)
        
        rick.assign(morty)
        
        self.assertEqual(rick.morty, morty)
        self.assertTrue(morty.is_assigned)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    .......
    ----------------------------------------------------------------------
    Ran 7 tests in 0.003s
    
    OK





    <unittest.main.TestProgram at 0x7f784060a7f0>

---


```python
class RickTests(unittest.TestCase):
    def test_universe(self):
        rick = Rick(111)
        self.assertEqual(rick.universe, 111)
        
    def test_has_morty(self):
        rick = Rick(111)
        self.assertEqual(rick.morty, None)
        
    def test_assing_morty(self):
        rick = Rick(111)
        morty = Morty(111)
        
        rick.assign(morty)
        
        self.assertEqual(rick.morty, morty)
        self.assertTrue(morty.is_assigned)
        
    def test_has_is_pickle(self):
        rick = Rick(111)
        self.assertFalse(rick.is_pickle)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    .....E..
    ======================================================================
    ERROR: test_has_is_pickle (__main__.RickTests)
    ----------------------------------------------------------------------
    Traceback (most recent call last):
      File "<ipython-input-25-2129f23a1266>", line 21, in test_has_is_pickle
        self.assertFalse(rick.is_pickle)
    AttributeError: 'Rick' object has no attribute 'is_pickle'
    
    ----------------------------------------------------------------------
    Ran 8 tests in 0.009s
    
    FAILED (errors=1)





    <unittest.main.TestProgram at 0x7f78405846d8>


---

```python
class Rick(object):
    def __init__(self, universe):
        self.universe = universe
        self.morty = None
        self.is_pickle = False
        
    def assign(self, morty):
        self.morty = morty
        morty.is_assigned = True
```


```python
class RickTests(unittest.TestCase):
    def test_universe(self):
        rick = Rick(111)
        self.assertEqual(rick.universe, 111)
        
    def test_has_morty(self):
        rick = Rick(111)
        self.assertEqual(rick.morty, None)
        
    def test_assing_morty(self):
        rick = Rick(111)
        morty = Morty(111)
        
        rick.assign(morty)
        
        self.assertEqual(rick.morty, morty)
        self.assertTrue(morty.is_assigned)
        
    def test_has_is_pickle(self):
        rick = Rick(111)
        self.assertFalse(rick.is_pickle)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    ........
    ----------------------------------------------------------------------
    Ran 8 tests in 0.006s
    
    OK





    <unittest.main.TestProgram at 0x7f78405887f0>

---


```python
class CitadelTests(unittest.TestCase):
    def test_get_all_residents(self):
        citadel = Citadel()
        residents = citadel.get_all_residents()
        self.assertCountEqual(residents, [])
        
    def test_add_resident(self):
        citadel = Citadel()
        rick = Rick(111)
        morty = Morty(111)
        
        citadel.add_resident(rick)
        citadel.add_resident(morty)
        residents = citadel.get_all_residents()
        
        self.assertEqual(residents[0], rick)
        self.assertEqual(residents[1], morty)
        
    def test_picle_ricks_with_morties(self):
        citadel = Citadel()
        rick = Rick(111)
        morty = Morty(111)
        rick.assign(morty)
        
        citadel.add_resident(rick)
        citadel.add_resident(morty)
        
        citadel.picle_ricks_with_morties()
        residents = citadel.get_all_residents()
        
        self.assertTrue(residents[0].is_pickle)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    ..E......
    ======================================================================
    ERROR: test_picle_ricks_with_morties (__main__.CitadelTests)
    ----------------------------------------------------------------------
    Traceback (most recent call last):
      File "<ipython-input-28-ae55a8f83f19>", line 28, in test_picle_ricks_with_morties
        citadel.picle_ricks_with_morties()
    AttributeError: 'Citadel' object has no attribute 'picle_ricks_with_morties'
    
    ----------------------------------------------------------------------
    Ran 9 tests in 0.010s
    
    FAILED (errors=1)





    <unittest.main.TestProgram at 0x7f78405f9710>


---

```python
class Citadel(object):
    def __init__(self):
        self.__residents__ = []
        
    def get_all_residents(self):
        return self.__residents__
    
    def add_resident(self, resident):
        self.__residents__.append(resident)
        
    def picle_ricks_with_morties(self):
        for resident in self.__residents__:
            if isinstance(resident, Rick):
                if resident.morty: resident.is_pickle = True
```


```python
class CitadelTests(unittest.TestCase):
    def test_get_all_residents(self):
        citadel = Citadel()
        residents = citadel.get_all_residents()
        self.assertCountEqual(residents, [])
        
    def test_add_resident(self):
        citadel = Citadel()
        rick = Rick(111)
        morty = Morty(111)
        
        citadel.add_resident(rick)
        citadel.add_resident(morty)
        residents = citadel.get_all_residents()
        
        self.assertEqual(residents[0], rick)
        self.assertEqual(residents[1], morty)
        
    def test_picle_ricks_with_morties(self):
        citadel = Citadel()
        rick = Rick(111)
        morty = Morty(111)
        rick.assign(morty)
        
        citadel.add_resident(rick)
        citadel.add_resident(morty)
        
        citadel.picle_ricks_with_morties()
        residents = citadel.get_all_residents()
        
        self.assertTrue(residents[0].is_pickle)

unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

    .........
    ----------------------------------------------------------------------
    Ran 9 tests in 0.007s
    
    OK





    <unittest.main.TestProgram at 0x7f78405a47f0>


