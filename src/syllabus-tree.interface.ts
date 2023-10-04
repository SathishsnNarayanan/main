/**
 * Food data with nested structure.
 * Each node has a syllabus_id and an optional list of children.
 */
export class FileNode {
  // id?: number;
  children!: FileNode[];
  syllabus_id!: string;
  syllabus_parent_id!: string | null;
  syllabus_name!: string;
  is_hidden!: boolean | string | number;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
  constructor(
    public syllabus_id: string,
    public syllabus_parent_id: string | null,
    public syllabus_name: string,
    public is_hidden: boolean | string | number,
    public level: number,
    public expandable: boolean,
    public children: FileNode[]
  ) {}
}
