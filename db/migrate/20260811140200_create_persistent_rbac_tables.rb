class CreatePersistentRbacTables < ActiveRecord::Migration[8.1]
  def change
    create_table :roles do |t|
      t.references :organization, foreign_key: true, null: true
      t.string :key, null: false
      t.string :name, null: false
      t.text :description
      t.boolean :protected, null: false, default: false

      t.timestamps
    end

    add_index :roles, [ :organization_id, :key ], unique: true

    create_table :permissions do |t|
      t.string :key, null: false
      t.string :name, null: false
      t.string :category, null: false
      t.text :description

      t.timestamps
    end

    add_index :permissions, :key, unique: true

    create_table :role_permissions do |t|
      t.references :role, null: false, foreign_key: { on_delete: :cascade }
      t.references :permission, null: false, foreign_key: { on_delete: :cascade }

      t.timestamps
    end

    add_index :role_permissions, [ :role_id, :permission_id ], unique: true

    add_reference :memberships, :role, foreign_key: true, null: true
  end
end
