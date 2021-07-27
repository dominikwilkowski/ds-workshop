import { plugin } from '@untitled-docs/live-code/rehype';
import { serialize } from 'next-mdx-remote/serialize';
import { readdirSync, readFileSync } from 'fs';
import { normalize } from 'path';
import matter from 'gray-matter';

const PKG_PATH = normalize(`${process.cwd()}/../packages/`);

export function slugify(string) {
	return string
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w-]+/g, '') // Remove all non-word characters
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

export async function getPkgBySlug(slug) {
	const realSlug = slugify(slug).replace(/\.md$/, '');
	const fileContents = readFileSync(normalize(`${PKG_PATH}/${realSlug}/README.md`), 'utf8');
	const pkgContents = JSON.parse(readFileSync(normalize(`${PKG_PATH}/${realSlug}/package.json`), 'utf8'));

	const { data, content } = matter(fileContents);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [plugin],
		},
		scope: data,
	});

	return {
		slug: realSlug,
		source: mdxSource,
		data,
		name: pkgContents.name,
	};
}

export async function getAllPkgs(filePath = PKG_PATH, limit) {
	const slugs = readdirSync(filePath, { withFileTypes: true });
	const files = await Promise.all(
		slugs
			.filter((file) => !file.name.startsWith('_') && !file.name.startsWith('.') && file.isDirectory())
			.sort((file) => (file.name === 'core' ? -1 : 1))
			.map((slug) => getPkgBySlug(slug.name))
	);

	return limit ? files.slice(0, limit) : files;
}
