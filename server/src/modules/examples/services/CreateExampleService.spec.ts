import FakeExamplesRepository from '@modules/examples/repositories/fakes/FakeExampleRepository';
import CreateExampleService from '@modules/examples/services/CreateExampleService';

describe('CreateExample', () => {
  it('should be able to create a new example', async () => {
    const fakeExamplesRepository = new FakeExamplesRepository();
    const createExample = new CreateExampleService(fakeExamplesRepository);

    const example = await createExample.execute({
      title: 'Created using jest',
    });

    expect(example).toHaveProperty('id');
  });

  it('should return ten', () => {
    expect(5 + 5).toBe(10);
  });
});
