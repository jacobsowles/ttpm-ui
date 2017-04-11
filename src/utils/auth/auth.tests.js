import { cleanRoute } from './auth';

(function() {
    describe('Auth Utils', () => {
        describe('cleanRoute', () => {
            it('should remove a leading / if present', () => {
                expect(cleanRoute('/tasks')).toBe('tasks');
            });

            it('should return the original route if no leading / is present', () => {
                expect(cleanRoute('tasks')).toBe('tasks');
            });
        });
    });
})();
