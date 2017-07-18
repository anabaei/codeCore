class Dog
  attr_reader :bones

  def initialize
    @bones = []
  end

  def give_bone(bone)
    @bones.push(bone) if @bones.count < 3
    @bones.count
  end

  def eat_bone
    @bones.pop
  end

  def bone_count
    @bones.count
  end
end