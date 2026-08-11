class AddMetadataColumnsToPermissions < ActiveRecord::Migration[8.1]
  def change
    change_table :permissions, bulk: true do |t|
      t.string :owning_capability, null: false, default: "platform"
      t.string :security_classification, null: false, default: "standard"
      t.string :default_availability, null: false, default: "all"
      t.string :version, null: false, default: "1.0.0"
    end
  end
end
