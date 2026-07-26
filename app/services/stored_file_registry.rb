require "digest"

class StoredFileRegistry
  def self.call(organization:, uploaded_by:, name:, content_type:, bytes:)
    StoredFile.create!(
      organization: organization,
      uploaded_by: uploaded_by,
      name: name,
      content_type: content_type,
      byte_size: bytes.bytesize,
      checksum: Digest::SHA256.hexdigest(bytes),
      storage_key: [ organization.id, SecureRandom.uuid ].join("/")
    )
  end
end
