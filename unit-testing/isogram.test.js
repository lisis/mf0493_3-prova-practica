import {it, expect, describe} from 'vitest';
import { isIsogram } from './isogram';

//1st test
it ("should return true because 'Dermatoglyphics' is an Isogram", () => {
    const result = isIsogram ("Dermatoglyphics");
    expect (result).toBe(true); 
});

//2nd test
it ("should return false because 'aba' contains repeated letters", () => {
    const result = isIsogram ("aba");
    expect (result).toBe(false); 
});

//3rd test
it ("should return false because ignore letter case", () => {
    const result = isIsogram ("moOse");
    expect (result).toBe(false); 
});