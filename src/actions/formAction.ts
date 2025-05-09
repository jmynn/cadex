'use server';
export default async function (
  formData: FormData
): Promise<Record<string, string>> {
  const username = formData.get('name');
  console.log(`Thank you for your interest, ${username}`);
  return { text: 'aaaaaa' };
}
