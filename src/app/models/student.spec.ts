import { Student } from './student';
describe('Student class tests', () => {
    let aStudent: Student = null;

    beforeEach(() => {
        aStudent = new Student();
    });

    it('should have a valid constructor', () => {
        expect(aStudent).not.toBeNull();
    });

    it('should set name correctly through constructor', () => {
        aStudent = new Student('John');
        expect(aStudent.name).toEqual('John');
    });

    it('should set and get name correctly', () => {
        aStudent.name = 'Tom';
        expect(aStudent.name).toEqual('Tom');
    });

    it('should set and get favorite correctly', () => {
        aStudent.favorite = false;
        expect(aStudent.favorite).toEqual(false);
    });

    afterEach(() => {
        aStudent = null;
    });
});