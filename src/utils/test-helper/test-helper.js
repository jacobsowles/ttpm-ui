export default class TestHelper {
    static thenResultIdsShouldBe(ids, collection) {
        ids.forEach(id => expect(collection.filter(item => item.Id == id).length).toBe(1));
    }
}
